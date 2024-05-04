using DAL.Models;

namespace DAL.Repositories
{
    public interface IDiseaseRepository
    {
        int Add(DiseaseRecord disease);
    }
    public class DiseaseRepository(MedicalFileContext context) : Repository<DiseaseRecord>(context), IDiseaseRepository
    {
        public int Add(DiseaseRecord diseaseRecord)
        {
            Create(diseaseRecord);
            return diseaseRecord.Id;
        }
    }
}
