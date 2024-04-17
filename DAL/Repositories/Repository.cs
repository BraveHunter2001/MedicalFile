using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories;

public abstract class Repository<TEntity>(DbContext context) where TEntity : class
{
    public void Create(TEntity entity)
    {
        context.Add(entity);
        context.SaveChanges();
    }

    public TEntity GetById(int id) => context.Find<TEntity>([id]);

    public void Insert(TEntity entity)
    {
        context.Update(entity);
        context.SaveChanges();
    }

    public void Delete(TEntity entity)
    {
        context.Remove(entity);
        context.SaveChanges();
    }
}