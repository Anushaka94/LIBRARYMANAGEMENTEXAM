using LibraryManagement.Data;
using LibraryManagement.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthorsController(ApplicationDbContext context)
        {
            _context = context;

        }

        [HttpPost("AddAuthor")]
        public async Task<ActionResult<Author>> AddAuthor(Author Authors)
        {
            if (_context.Authors.Any(u => u.Name == Authors.Name))
            {
                return BadRequest("Auther already exists.");
            }
            var authors = new Author
            {

                Name = Authors.Name,
                Bio=Authors.Bio,
            };
           
            _context.Authors.Add(authors);
            _context.SaveChanges();
            return Ok("Successfully Added Author");
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Author>>> GetAuthors()
        {
            return _context.Authors.ToList();
        }




        [HttpPost("AddCatogory")]
        public async Task<ActionResult<Category>> AddCatogory(Category Categorys)
        {
            if (_context.Categorys.Any(u => u.Name == Categorys.Name))
            {
                return BadRequest("Categorys already exists.");
            }
            var Categoryies = new Category
            {

                Name = Categorys.Name,
                Description= Categorys.Description,
               
            };

            _context.Categorys.Add(Categoryies);
            _context.SaveChanges();
            return Ok("Successfully Added Categorys");
        }


        [HttpGet("getcatory")]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategoryies()
        {
            return _context.Categorys.ToList();
        }
    }
}
