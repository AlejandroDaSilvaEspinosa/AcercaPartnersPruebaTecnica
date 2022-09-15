using AcercaPrueba.Core.Attributes;

namespace AcercaPrueba.Core.Entities
{
    [BsonCollection("CarsInfo")]
    public class CarInfo : AggregateRoot
    {
        public int OrderNumber { get; set; }
        public string ChassisNumber { get; set; }
        public string Model { get; set; }
        public DateTime DeliveryDate { get; set; }
        public string LicensePlate { get; set; }
    }
}
