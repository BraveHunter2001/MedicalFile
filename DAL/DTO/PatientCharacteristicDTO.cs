using DAL.Models;

namespace DAL.DTO;

public class PatientCharacteristicDTO
{ 
    public int Age { get; set; }
    public string RiskFactor { get; set; }
    public PatientCharacteristicDTO(PatientCharacteristic patientCharacteristic)
    {
        Age = patientCharacteristic.Age;
        RiskFactor = patientCharacteristic.RiskFactor;
    }
}
