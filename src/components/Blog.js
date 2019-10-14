import React, {Component} from 'react'
import Post from './Post'

export default class Blog extends Component {
    constructor(){
        super()
        this.state = {
            posts: [
                {
                    title: 'wow, what a blog',
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ratione aliquam nam eum. Tempora, nulla repellat quisquam pariatur rerum dicta mollitia. Est iusto voluptas ut obcaecati voluptatum corporis similique numquam.',
                    comments: ['I love this blog', 'some other comment', 'wowza']
                },
                {
                    title: 'Post numba 2',
                    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut voluptatem dolorem a corrupti cum id, reiciendis aliquam, reprehenderit exercitationem, totam aspernatur explicabo quidem consequuntur ea perferendis repudiandae porro eligendi nemo?',
                    comments: ['yay']
                },
                {
                    title: 'Posty post 3',
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cum sunt autem at totam, deleniti sapiente libero omnis qui rerum neque ipsa eaque itaque molestias esse eius dolorum, repellendus sequi.',
                    comments: ['coolio','I love posting on blogs', 'weof']
                },
            ]
        }
    }
    render(){
        return(
            <div className="blog">
               Blog {}
               <Post />
            </div>
        )
    }
}