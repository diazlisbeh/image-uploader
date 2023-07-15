using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using imageUploader.API.Hubs;
using imageUploader.API.Models;
using Microsoft.AspNetCore.SignalR;

namespace imageUploader.API.Services;

public class UploadFileService : IUploadFileService
{
    private readonly string _connectionString;
    private readonly string _containerName;
    private readonly IHubContext<ProgressHub> _hubContext;

    public UploadFileService(IConfiguration configuration, IHubContext<ProgressHub> hubContext)
    {
        _connectionString = configuration.GetConnectionString("AzureStorageAccount");
        _containerName = configuration["AzureStorageContainerName"];
        _hubContext = hubContext;
    }

    public async Task<Image> UploadFileAsync(IFormFile file)
    {
        var blobServiceClient = new BlobServiceClient(_connectionString);
        var blobContainerClient = blobServiceClient.GetBlobContainerClient(_containerName);
        var blobClient = blobContainerClient.GetBlobClient(file.FileName);


        // await blobClient.UploadAsync(file.OpenReadStream(), true);

        _ = await blobClient.UploadAsync(file.OpenReadStream(), new BlobUploadOptions
        {
            ProgressHandler = new Progress<long>(progress => _hubContext.Clients.All.SendAsync("progress", progress))
        });

        var response = new Image
        {
            FileName = blobClient.Name,
            FilePath = blobClient.Uri.AbsoluteUri
        };
        return response;
    }
}
