using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Data;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TagController : ControllerBase
    {

        private readonly TagRepository _tagRepository;
        public TagController(ApplicationDbContext context)
        {
            _tagRepository = new TagRepository(context);
        }

        [HttpPost]
        public IActionResult Post(Tag tag)
        {
            _tagRepository.Add(tag);
            return CreatedAtAction("Get", new { id = tag.Id }, tag);
        }
        [HttpPut("{id}")]
        public IActionResult Put(int id, Tag tag)
        {
            if (id != tag.Id)
            {
                return BadRequest();
            }
            _tagRepository.Update(tag);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _tagRepository.Delete(id);
            return NoContent();
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_tagRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var tag = _tagRepository.GetById(id);
            if (tag == null)
            {
                return NotFound();
            }
            return Ok(tag);
        }


    }
}
