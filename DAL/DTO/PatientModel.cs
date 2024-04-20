namespace DAL.DTO;

public class PatientModel : UserModel
{
    public string RiskFactor { get; set; }
    public int Age { get; set; }
}
