using AcercaPrueba.Infrastructure.Data.MongoProvider.Settings.Interface;

namespace AcercaPrueba.Infrastructure.Data.MongoProvider.Settings
{
    public class MongoDbSettings : IMongoDbSettings
    {
        public string DatabaseName { get; set; }
        public string ConnectionString { get; set; }
    }
}
