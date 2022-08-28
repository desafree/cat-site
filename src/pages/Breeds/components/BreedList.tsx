/* eslint-disable no-duplicate-imports */
import { FC, useContext, useRef, useLayoutEffect } from 'react'
import BreedTrailerStyled from '../../../components/styled/BreedTrailer.styled'
import BreedContext from '../../../context/BreedContext'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PaginationStyled from '../../../components/styled/Pagination.styled'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

interface Props {
  className?: string
}

const BreedList: FC<Props> = ({ className }) => {
  const { breeds } = useContext(BreedContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])
  const container = useRef<HTMLDivElement | null>(null)
  const el = gsap.utils.selector(container)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = breeds.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  useLayoutEffect(() => {
    const animation = gsap
      .timeline()
      .from(el('.cont'), {
        scale: 0.8,
        opacity: 0,
        x: -100,
        stagger: 0.1,
      })
      .from(el('.text'), { opacity: 0, y: 50, stagger: 0.1 }, '<.2')

    return () => {
      animation.kill()
    }
  }, [currentPage])

  return (
    <div className={className}>
      <h3>All Breeds</h3>
      <div ref={container}>
        {currentPosts.map((breed, index) => {
          return (
            <Link key={breed.id} to={`/${breed.id}`}>
              <BreedTrailerStyled
                name={breed.name}
                description={breed.description}
                index={index + 1 + (currentPage - 1) * 10}
                img={breed.image?.url}
              ></BreedTrailerStyled>
            </Link>
          )
        })}
      </div>
      <PaginationStyled
        postsPerPage={postsPerPage}
        totalPosts={breeds.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

export default BreedList
