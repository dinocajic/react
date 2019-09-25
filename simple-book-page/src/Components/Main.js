import React from 'react';

function Main() {
    return (
        <main>
            <h1>
                An Illustrative Introduction to Algorithms
            </h1>
            
            <img    
                src="https://images-na.ssl-images-amazon.com/images/I/513lRi35-zL._SX260_.jpg" 
                alt="An Illustrative Introduction to Algorithms" />
                
            <article>
                <p>
                    This book was written to fill the gap that exists when Computer Science students, 
                    and programmers, attempt to learn and analyze the different algorithms that currently 
                    exist. I took a course on Algorithms and was disappointed in the type of material 
                    that’s currently available. There are two types of books that I kept running into:
                </p>
                <p>
                    First, the overly complex book. This book seems like it's designed for people that 
                    are already fluent in the topics and wanted a more detailed and mathematical approach 
                    to algorithms.
                </p>
                <p>
                    Second, the overly simple book. A basic introduction to algorithms. This is a high-level 
                    overview of some algorithms, and most complex algorithms are not mentioned. After completion, 
                    the person is still incapable of showing how the algorithm runs when a problem is presented.
                </p>
                <p>
                    This book is designed for undergraduate upper-class students and programmers that want to 
                    expand their horizon. It can be used as a supplementary book alongside the complex book. 
                    Readers will gain the knowledge necessary to solve those mathematically intensive algorithmic 
                    problems that were presented in the complex book.
                </p>
                <p>
                    Each chapter consists of a brief description of how the algorithm works followed by a detailed 
                    example or two. No steps are skipped during the traversal process. The reader is presented with 
                    a clear, simplified approach to solving the algorithm that the chapter is dedicated to. Each 
                    chapter follows a natural progression from the previous chapter. If certain algorithms rely 
                    heavily on prior knowledge, the previous chapter covers that topic. For example, Kruskal’s 
                    algorithm relies heavily on prior knowledge of Minimum Spanning Trees and Greedy Algorithms. 
                    Each of those topics receives a chapter of its own.
                </p>
            </article>
        </main>
    );
}

export default Main;