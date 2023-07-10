using imageUploader.API.Hubs;
using imageUploader.API.Services;

var builder = WebApplication.CreateBuilder(args);
var policyName = "AllowAllOrigins";

// Add services to the container.


//Add SignalR
builder.Services.AddSignalR();

//Add Cors policy
builder.Services.AddCors(options =>
{
    options.AddPolicy(policyName, builder =>
    {
        builder.AllowAnyHeader()
                      .AllowAnyMethod()
                      .SetIsOriginAllowed((host) => true)
                      .AllowCredentials();
    });
});

// Add dependency injection
builder.Services.AddScoped<IUploadFileService, UploadFileService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();



app.UseRouting();
app.UseCors(policyName);
app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapHub<ProgressHub>("/progressHub");
    endpoints.MapControllers();
});

app.MapControllers();

app.Run();
