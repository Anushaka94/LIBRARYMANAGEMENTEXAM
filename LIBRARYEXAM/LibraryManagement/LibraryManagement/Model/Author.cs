using System.ComponentModel.DataAnnotations;

namespace LibraryManagement.Model
{
    public class Author
    {
        public string Name { get; set; }
        [Key]
        public int Id { get; set; }

        public string Bio { get; set; }
      
    }
}
