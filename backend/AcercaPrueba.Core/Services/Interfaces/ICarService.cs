using AcercaPrueba.Core.Entities;

namespace AcercaPrueba.Core.Services.Interfaces
{
    public interface ICarService : IDisposable
    {
        public Task<(int, IReadOnlyList<CarInfo>)> GetCarInventoryPaged(int page, int pageSize);
        public Task DeleteCarInfo(Guid carId);
        public Task UpdateCarInfo(CarInfo carInfo);
        public Task AddCarInfo(CarInfo carInfo);
    }
}
