using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace DAL;

public class MedicalFileContext : DbContext
{
    public DbSet<Patient> Patients { get; set; }
    public DbSet<Disease> Diseases { get; set; }

    public MedicalFileContext(DbContextOptions<MedicalFileContext> option) : base(option)
    {
        
    }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Patient>()
            .HasMany(p => p.Diseases)
            .WithOne(d => d.Patient)
            .HasForeignKey(d => d.PatientId);

        builder.Entity<Patient>().Property(b => b.Id).UseIdentityAlwaysColumn();
        builder.Entity<Disease>().Property(b => b.Id).UseIdentityAlwaysColumn();

        base.OnModelCreating(builder);
    }
}