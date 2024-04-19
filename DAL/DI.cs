using DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace DAL;

public static class DI
{
    public static void AddDAL(this IServiceCollection services)
    {
        services.AddDbContext<MedicalFileContext>(
            opt => opt.UseNpgsql("Server=localhost;Port=5432;Database=medicalFiles;User ID=pguser;Password=pgadmin;")
        );

        services.AddTransient<IPatientCharacteristicRepository, PatientCharacteristicRepository>();
        services.AddTransient<IUserRepository, UserRepository>();
        
    }
}
