namespace AcercaPrueba.Infrastructure.Data.MongoProvider.Settings.Interface
{
    public interface IMongoDbSettings
    {
        string DatabaseName { get; set; }
        string ConnectionString { get; set; }
    }
}
