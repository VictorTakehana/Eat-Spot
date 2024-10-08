using Microsoft.EntityFrameworkCore;
using SaborResenha.Models;

namespace SaborResenha.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
    : base(options)
        {
        }

        public DbSet<Estabelecimento> Estabelecimentos { get; set; }
    }
}