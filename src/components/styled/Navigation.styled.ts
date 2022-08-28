import styled from 'styled-components'

const NavigationStyled = styled.nav`
  position: relative;
  z-index: 200;

  .mobile {
    display: none;
  }

  .desktop {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 25px;
    left: 50px;
    right: 50px;
    z-index: 200;
    a {
      color: #000;
    }

    ul {
      display: flex;
      gap: 30px;
      list-style: none;

      li {
        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.secondary};
          font-weight: 700;

          &:hover {
            border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: initial;
      .navTrigger {
        position: fixed;
        z-index: 20;
        padding: 5px;
        right: 20px;
        top: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);
        background-color: ${({ theme }) => theme.colors.primary};
        img {
          width: 30px;
        }
      }

      .menu-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: ${({ theme }) => theme.colors.secondary};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        ul {
          list-style: none;
          li {
            margin-bottom: 20px;

            &.internal {
              a {
                color: ${({ theme }) => theme.colors.tertiary};
              }
            }
            a {
              font-size: 40px;
              font-weight: 700;
              line-height: 50px;
              letter-spacing: 0px;
              text-align: left;
              color: white;
              text-decoration: none;
            }
            &:first-child {
              margin-bottom: 50px;
            }
          }
        }
      }
    }
  }
`

// <div className='mobile'>
//         <button className='navTrigger'>
//           <img src='/assets/icons/menu.svg' alt='' />
//         </button>

//         <div className='menu-container'>
//           <ul>
//             <li>
//               <Link to='/'>
//                 <img src='/assets/icons/logo.svg' alt='' />
//               </Link>
//             </li>
//             <li>
//               <a href='https://github.com/desafree' target='_blank' rel='noreferrer'>
//                 github
//               </a>
//             </li>
//             <li>
//               <a
//                 href='https://www.linkedin.com/in/nicola-de-sanctis-8b094a1b3/'
//                 target='_blank'
//                 rel='noreferrer'
//               >
//                 linkedin
//               </a>
//             </li>
//             <li>
//               <a href='mailto:nicoladesanctis99@gmail.com'>mail</a>
//             </li>
//           </ul>
//         </div>
//       </div>
export default NavigationStyled
