namespace imageUploader.API.Services
{
    public interface IUploadFileService
    {
        Task<string> UploadFileAsync(IFormFile file);
    }
}