using Azure.Storage.Blobs;

namespace imageUploader.API.Services;

public class UploadFileService : IUploadFileService
{
    private readonly string _connectionString;
    private readonly string _containerName;

    public UploadFileService(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("AzureStorageAccount");
        _containerName = configuration["AzureStorageContainerName"];
    }

    public async Task<string> UploadFileAsync(IFormFile file)
    {
        var blobServiceClient = new BlobServiceClient(_connectionString);
        var blobContainerClient = blobServiceClient.GetBlobContainerClient(_containerName);
        var blobClient = blobContainerClient.GetBlobClient(file.FileName);

        await blobClient.UploadAsync(file.OpenReadStream(), true);
        return blobClient.Uri.AbsoluteUri;
    }
}
