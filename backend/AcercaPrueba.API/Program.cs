using AcercaPrueba.Core.Data.Repository.Interface;
using AcercaPrueba.Core.Services;
using AcercaPrueba.Core.Services.Interfaces;
using AcercaPrueba.Infrastructure.Data.MongoProvider.Repository;
using AcercaPrueba.Infrastructure.Data.MongoProvider.Settings;
using AcercaPrueba.Infrastructure.Data.MongoProvider.Settings.Interface;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<MongoDbSettings>(builder.Configuration.GetSection("MongoDbSettings"));
builder.Services.AddSingleton<IMongoDbSettings>(serviceProvider =>
    serviceProvider.GetRequiredService<IOptions<MongoDbSettings>>().Value);

builder.Services.AddScoped(typeof(IRepository<>), typeof(MongoRepository<>));
builder.Services.AddScoped(typeof(ICarRepository), typeof(CarRepository));
builder.Services.AddScoped(typeof(ICarService), typeof(CarService));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", policy => { policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod(); });
});


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors();

app.UseSwagger();
app.UseSwaggerUI();


//app.UseHttpsRedirection();

//app.UseAuthorization();

app.MapControllers();

app.Run();
