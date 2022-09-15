using AcercaPrueba.Core.Data.Repository.Interface;
using AcercaPrueba.Core.Entities;
using AcercaPrueba.Core.Services.Interfaces;

namespace AcercaPrueba.Core.Services
{
    public class CarService : ICarService
    {
        private readonly IRepository<CarInfo> _carInfoRepository;
        private bool _disposed;
        public CarService(IRepository<CarInfo> carInfoRepository)
        {
            _carInfoRepository = carInfoRepository;
        }

        public async Task AddCarInfo(CarInfo carInfo)
        {
            await _carInfoRepository.InsertOneAsync(carInfo);
        }

        public async Task DeleteCarInfo(Guid carId)
        {
            await _carInfoRepository.DeleteByIdAsync(carId);
        }

        public async Task<(int, IReadOnlyList<CarInfo>)> GetCarInventoryPaged(int page, int pageSize)
        {
            return await _carInfoRepository.QueryByPaged(page, pageSize);
        }

        public async Task UpdateCarInfo(CarInfo carInfo)
        {
            await _carInfoRepository.ReplaceOneAsync(carInfo);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        protected virtual void Dispose(bool disposing)
        {
            if (_disposed)
            {
                return;
            }

            if (disposing)
            {
            }

            _disposed = true;
        }
    }
}
