using AcercaPrueba.API.Models;
using AcercaPrueba.Core.Data.Repository.Interface;
using AcercaPrueba.Core.Entities;
using AcercaPrueba.Core.Services;
using AcercaPrueba.Core.Services.Interfaces;
using AcercaPrueba.Infrastructure.Data.MongoProvider.Repository;
using AcercaPrueba.Infrastructure.Data.MongoProvider.Settings.Interface;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace AcercaPrueba.API.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    [EnableCors("AllowAllOrigins")]
    public class CarInventoryController : ControllerBase
    {
        private readonly ICarService _carService;
        private readonly ILogger<CarInventoryController> _logger;

        public CarInventoryController(ILogger<CarInventoryController> logger, ICarService carService)
        {
            _logger = logger;
            _carService = carService;
        }


        [HttpGet]
        public async Task<IActionResult> GetCarInventoryPaged(int page, int pageSize)
        {

            (int total, IReadOnlyList<CarInfo> rows) result;
            using (_carService)
            {
                result = await _carService.GetCarInventoryPaged(page, pageSize);
            }
            var rows = result.rows.Select(s => new CarInfoModel(s));
            return Ok(new { rows, result.total });

        }
        [HttpDelete]
        public async Task<IActionResult> DeleteCar(string id)
        {
            using (_carService)
            {
                Guid carId = new Guid(id);
                await _carService.DeleteCarInfo(carId);
            }
            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> UpdateCar(CarInfoModel car)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            using (_carService)
            {
                CarInfo carInfo = SerializeModelView(car);
                await _carService.UpdateCarInfo(carInfo);
                return Ok();
            }
        }
        [HttpPost]
        public async Task<IActionResult> AddCar(CarInfoModel car)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            using (_carService)
            {
                CarInfo carInfo = SerializeModelView(car);
                await _carService.AddCarInfo(carInfo);
                return Ok();
            }
        }
        private CarInfo SerializeModelView(CarInfoModel car)
        {
            CarInfo carInfo = new CarInfo()
            {
                ChassisNumber = car.ChassisNumber,
                OrderNumber = car.OrderNumber,
                Model = car.Model,
                LicensePlate = car.LicensePlate,
                DeliveryDate = car.DeliveryDate,
                Id = String.IsNullOrEmpty(car.Id) ? new Guid() : new Guid(car.Id)
            };
            return carInfo;
        }
    }
}