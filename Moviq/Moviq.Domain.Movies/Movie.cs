﻿namespace Moviq.Domain.Movies
{
    using Moviq.Interfaces.Models;
    using System;
    using System.Collections.Generic;

    public class Movie : IMovie
    {
        public ICollection<IActor> Actors { get; set; }
        public ICollection<string> TrailerLinks { get; set; }
        public string Uid { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public object Metadata { get; set; }
        public decimal Price { get; set; }
        public string ThumbnailLink { get; set; }
        public IEnumerable<string> Tags { get; set; }
    }
}
