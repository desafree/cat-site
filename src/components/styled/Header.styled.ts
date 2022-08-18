import styled from 'styled-components'
import Header from '../../pages/Homepage/components/Header'

const HeaderStyled = styled(Header)`
  display: flex;
  justify-content: space-between;
  margin: 0 0 80px 0;
  .text {
    flex: 1;
    padding: 220px 0 320px 108px;

    h1 {
      font-size: 56px;
      font-weight: 800;
      line-height: 71px;
      letter-spacing: 0px;
      text-align: left;
      margin-bottom: 30px;
      color: ${({ theme }) => theme.colors.secondary};
    }

    p {
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
      max-width: 450px;
      margin-bottom: 50px;
    }
  }

  .img-container {
    flex: 1;
    background-image: url('/assets/home/cat-home.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 400px;
  }

  display: flex;
  justify-content: space-between;
  margin: 0 0 80px 0;
  .text {
    flex: 1;
    padding: 220px 0 320px 108px;

    h1 {
      font-size: 56px;
      font-weight: 800;
      line-height: 71px;
      letter-spacing: 0px;
      text-align: left;
      margin-bottom: 30px;
      color: ${({ theme }) => theme.colors.secondary};
    }

    p {
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
      max-width: 450px;
      margin-bottom: 50px;
    }
  }

  .img-container {
    flex: 1;
    background-image: url('/assets/home/cat-home.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 400px;
  }

  @media (max-width: 1400px) {
    .img-container {
      display: none;
    }

    background-image: url(/assets/home/cat-home.jpg);
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    margin: 0 0 120px 0;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 160px;
    .text {
      padding: 150px 0 420px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: 56px;
        font-weight: 800;
        line-height: 71px;
        letter-spacing: 0px;
        text-align: left;
        margin-bottom: 30px;
        color: ${({ theme }) => theme.colors.secondary};
      }

      p {
        font-size: 24px;
        font-weight: 500;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        max-width: 450px;
        margin-bottom: 50px;
        color: white;
      }
    }
  }

  @media (max-width: 700px) {
    display: block;
    background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
      url(/assets/home/cat-smart-2.jpg);

    .text {
      margin: 0 30px;
      padding: 150px 0;

      p {
        color: white;
      }
    }
  }
`

export default HeaderStyled
