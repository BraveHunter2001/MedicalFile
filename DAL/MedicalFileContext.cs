using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace DAL;

public class MedicalFileContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<PatientCharacteristic> PatientCharacteristics { get; set; }
    public DbSet<DiseaseRecord> DiseaseRecords { get; set; }

    public MedicalFileContext(DbContextOptions<MedicalFileContext> option) : base(option)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        AppContext.SetSwitch("Npgsql.DisableDateTimeInfinityConversions", true);
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<User>()
            .HasMany(p => p.DiseaseRecords)
            .WithOne(d => d.Patient)
            .HasForeignKey(d => d.PatientId);

        builder.Entity<User>()
            .HasOne(p => p.PatientCharacteristic)
            .WithOne(c => c.Patient)
            .HasForeignKey<PatientCharacteristic>(c => c.PatientId);

        // Создаем последовательности, чтобы автоматически генерить ключи
        builder.Entity<User>().Property(b => b.Id).UseIdentityAlwaysColumn();
        builder.Entity<DiseaseRecord>().Property(b => b.Id).UseIdentityAlwaysColumn();
        builder.Entity<PatientCharacteristic>().Property(b => b.Id).UseIdentityAlwaysColumn();

        base.OnModelCreating(builder);
    }
}