import Link from 'next/link'

function LearnMore({id}) {
    return ( 
        <Link href='/posts/[id]' as={`/posts/${id}`}>
        <a>Читать далее</a>
        </Link>
     );
}

export default LearnMore;