﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Data;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public class CategoryRepository
    {
        private readonly ApplicationDbContext _context;

        public CategoryRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Category> GetAll()
        {
            return _context.Category.OrderBy(c => c.Name).ToList();
        }

        public Category GetById(int id)
        {
            return _context.Category.FirstOrDefault(c => c.Id == id);
        }
        public void Add(Category category)
        {
            _context.Add(category);
            _context.SaveChanges();
        }

        public void Update(Category post)
        {
            _context.Entry(post).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var category = GetById(id);
            _context.Category.Remove(category);
            _context.SaveChanges();
        }
    }
}
