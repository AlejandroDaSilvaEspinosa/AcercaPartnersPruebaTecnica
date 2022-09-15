using System.Linq.Expressions;

namespace AcercaPrueba.Core.Data.Repository.Interface
{
    public interface IRepository<TEntity> where TEntity : class
    {
        IQueryable<TEntity> AsQueryable();

        IEnumerable<TEntity> FilterBy(
            Expression<Func<TEntity, bool>> filterExpression);

        IEnumerable<TProjected> FilterBy<TProjected>(
            Expression<Func<TEntity, bool>> filterExpression,
            Expression<Func<TEntity, TProjected>> projectionExpression);

        TEntity FindOne(Expression<Func<TEntity, bool>> filterExpression);

        Task<TEntity> FindOneAsync(Expression<Func<TEntity, bool>> filterExpression);

        TEntity FindById(Guid id);

        Task<TEntity> FindByIdAsync(Guid id);

        void InsertOne(TEntity document);

        Task InsertOneAsync(TEntity document);

        void InsertMany(ICollection<TEntity> documents);

        Task InsertManyAsync(ICollection<TEntity> documents);

        void ReplaceOne(TEntity document);

        Task ReplaceOneAsync(TEntity document);

        void DeleteOne(Expression<Func<TEntity, bool>> filterExpression);

        Task DeleteOneAsync(Expression<Func<TEntity, bool>> filterExpression);

        void DeleteById(Guid id);

        Task DeleteByIdAsync(Guid id);

        void DeleteMany(Expression<Func<TEntity, bool>> filterExpression);

        Task DeleteManyAsync(Expression<Func<TEntity, bool>> filterExpression);
        Task<(int total, IReadOnlyList<TEntity> rows)> QueryByPaged(int page, int pageSize);
    }
}
