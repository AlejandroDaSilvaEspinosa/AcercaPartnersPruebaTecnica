using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace AcercaPrueba.Core.Entities
{
    public abstract class AggregateRoot
    {
        [BsonId]
        public Guid Id;
    }
}
