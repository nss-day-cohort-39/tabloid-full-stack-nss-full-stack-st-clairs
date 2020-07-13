using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models
{
    public class Post
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string ImageLocation { get; set; }

        public string Content { get; set; }

        [Required]
        public DateTime CreateDateTime { get; set; }
        
        [Required]
        public DateTime PublishDateTime { get; set; }

        public bool IsApproved { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; }

        [Required]
        public int UserProfileId { get; set; }

        public UserProfile UserProfile { get; set; }

        public List<Comment> Comments { get; set; }
    }
}