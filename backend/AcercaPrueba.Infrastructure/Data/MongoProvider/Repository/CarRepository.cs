using AcercaPrueba.Core.Data.Repository.Interface;
using AcercaPrueba.Infrastructure.Data.MongoProvider.Settings.Interface;
using AcercaPrueba.Core.Entities;

namespace AcercaPrueba.Infrastructure.Data.MongoProvider.Repository 
{

    public class CarRepository : MongoRepository<CarInfo>, ICarRepository
    {
        public CarRepository(IMongoDbSettings settings) : base(settings)
        {
        }
    }
}
