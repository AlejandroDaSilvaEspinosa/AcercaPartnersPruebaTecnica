using AcercaPrueba.Core.Entities;
using System.ComponentModel.DataAnnotations;

namespace AcercaPrueba.API.Models
{
    public class CarInfoModel
    {        
        public string Id { get; set; }
        [Required(ErrorMessage = "Order Number is required.")]
        public int OrderNumber { get; set; }
        [Required(ErrorMessage = "Chassis Number is required.")]
        [StringLength(17,ErrorMessage ="Chassis Number should have 17 characters length.")]
        [RegularExpression(@"^[a-zA-Z0-9]+$",ErrorMessage = "Chassis Number must be composed by numbers and letters.")]
        public string ChassisNumber { get; set; }
        [Required(ErrorMessage = "Model is required.")]
        public string Model { get; set; }
        [Required(ErrorMessage = "Delivery Date is required.")]
        public DateTime DeliveryDate { get; set; }
        [StringLength(7, ErrorMessage = "Chassis Number should have 17 characters length.")]
        //Regular expression attribute check if the license plate start with 4 numbers and 3 words
        
        [RegularExpression(@"^[0-9]{4}[a-zA-Z]{3}$", ErrorMessage= "The license plate must be composed by 4 numbers and 3 letters.")]
        public string LicensePlate { get; set; }
        public CarInfoModel() { }
        public CarInfoModel(CarInfo carInfo)
        {
            Id = carInfo.Id.ToString();
            OrderNumber = carInfo.OrderNumber;
            ChassisNumber = carInfo.ChassisNumber;
            Model = carInfo.Model;
            DeliveryDate = carInfo.DeliveryDate;
            LicensePlate = carInfo.LicensePlate;
        }

    }
}
