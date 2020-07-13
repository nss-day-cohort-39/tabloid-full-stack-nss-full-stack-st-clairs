using System.Security.Cryptography.X509Certificates;

namespace Tabloid.Models
{
    public class Comment
    {
        public int Id { get; set; }
       
        //this causes a cycle to break the system: to be fixed
        //public int PostId { get; set; }
        //public Post Post { get; set; }
    }
}
