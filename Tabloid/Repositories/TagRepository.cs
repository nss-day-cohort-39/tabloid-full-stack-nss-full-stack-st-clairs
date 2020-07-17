using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using Tabloid.Data;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public class TagRepository
    {
        private readonly ApplicationDbContext _context;

        public TagRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Tag> GetAll()
        {
            return _context.Tag.OrderBy(c => c.Name).ToList();
        }

        public void Add(Tag tag)
        {
            _context.Add(tag);
            _context.SaveChanges();
        }

        public void Update(Tag tag)
        {
            _context.Entry(tag).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public Tag GetById(int id)
        {
            return _context.Tag.FirstOrDefault(c => c.Id == id);
        }

        public void Delete(int id)
        {
            var tag = GetById(id);
            _context.Tag.Remove(tag);
            _context.SaveChanges();
        }
    }
}
