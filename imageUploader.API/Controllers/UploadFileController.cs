using Microsoft.AspNetCore.Mvc;
using imageUploader.API.Services;
using imageUploader.API.Hubs;
using Microsoft.AspNetCore.SignalR;

namespace imageUploader.API.Controllers;

[ApiController]
[Route("[controller]")]
public class UploadFileController : ControllerBase
{
    private readonly IUploadFileService _uploadFileService;
    private readonly IHubContext<ProgressHub> _hubContext;

    public UploadFileController(IUploadFileService uploadFileService, IHubContext<ProgressHub> hubContext)
    {
        _uploadFileService = uploadFileService;
        _hubContext = hubContext;
    }

    [HttpPost]
    public async Task<IActionResult> UploadFileAsync(IFormFile file)
    {
        var result = await _uploadFileService.UploadFileAsync(file);

        for (int i = 0; i <= 100; i++)
        {
            await _hubContext.Clients.All.SendAsync("ReceiveProgressUpdate", i);
            await Task.Delay(100);
        }
        return Ok(result);
    }
}