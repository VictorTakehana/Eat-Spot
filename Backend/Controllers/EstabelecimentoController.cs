using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SaborResenha.Data;
using SaborResenha.Models;

namespace SaborResenha.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstabelecimentoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EstabelecimentoController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/estabelecimento
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Estabelecimento>>> GetEstabelecimentos()
        {
            return await _context.Estabelecimentos.ToListAsync();
        }

        // GET: api/estabelecimento/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Estabelecimento>> GetEstabelecimento(int id)
        {
            var estabelecimento = await _context.Estabelecimentos.FindAsync(id);

            if (estabelecimento == null)
            {
                return NotFound();
            }

            return estabelecimento;
        }
    }
}