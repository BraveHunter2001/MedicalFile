﻿using DAL.Models;

namespace DAL.DTO;

public class PatientDTO
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Login { get; set; }
    public string Password { get; set; }
    public PatientCharacteristicDTO PatientCharacteristic { get; set; }

    public PatientDTO(User user)
    {
        Id = user.Id;
        Name = user.Name;
        Login = user.Login;
        Password = user.Password;
        PatientCharacteristic = new PatientCharacteristicDTO(user.PatientCharacteristic);
    }
}
