using imageUploader.API.Models;

namespace imageUploader.API.Services
{
    public interface IUploadFileService
    {
        Task<Image> UploadFileAsync(IFormFile file);
    }
}