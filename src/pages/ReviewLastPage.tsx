import { css, styled } from 'styled-components';
import { useState } from 'react';
import Heading from '../components/common/Heading';
import Title from '../components/form/Title';
import FileInput from '../components/confirm/FileInput';
import ConfirmForm from '../components/confirm/ConfirmForm';
import MoveButton from '../components/common/MoveButton';

const Section = styled.section`
  width: 100%;
  min-height: 92vh;
  background-image: url('/images/bg-patent-review.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  `;
const Container = styled.div`
  max-width: 724px;
  margin-inline: auto;
  width: 100%;
  height: 100%;
  padding-top: 3.8rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FileContainer = styled.div`
  margin-top: 3rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  width: 100%;
  height: 100%;

  input[type="file"] {
    display: none;
  }

  label {
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 10rem;
    border: 1px dashed var(--gray-3, #9EA9BE);;
    background-color: #f4f6fa;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    padding: 1.7rem 20rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      display: flex;
      width: 2.4rem;
      height: 2.4rem;
      margin-bottom: .5rem;
    }
    span {
      display: flex;
      text-align : center;
      color: #9ea9be;
    }
  }
  `;

const ButtonContainer = styled.div`
  width: 29rem;
  height: 4rem;
  margin-top: 2.5rem;
  margin-bottom: 10rem;
  background-color: #424C60;
  border-radius: 8px;
  display: flex;
  
  button{
    img {
      display: flex;
      margin-right: .4rem;
    }
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Pretendard';
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-self: flex-start;
  margin-top: 1rem;
  font-weight: 600;
  color: rgba(246, 0, 0, 0.80);
  font-size: 1rem;
`;

export default function ReviewLastPage() {
  const [submitedFileName, setSubmitedFileName] = useState('');
  const [file, setFile] = useState({});
  const [modal, setModal] = useState(false);
  const [toggle, setToggle] = useState(true);

  const handleConfirm = () => {
    if (!modal) {
      setModal(true);
      return;
    }
    setModal(false);
  };

  return (
    <Section>
      <Container>
        <Heading step="CONFIRM" strong="" text="추가 제출할 파일이 있다면 첨부해 주세요!" description="파일이 없으시면 검토 신청서만 마지막으로 확인해주세요 :)" />
        {!modal ? (
          <>
            <FileContainer>
              <Title keywordName="파일 첨부" toggle={toggle} setToggle={setToggle} />
              {toggle && (
                <FileInput
                  submitedFileName={submitedFileName}
                  setFile={setFile}
                  setSubmitedFileName={setSubmitedFileName}
                />
              )}
            </FileContainer>
            <StyledDiv>
              * 해당 페이지에서 벗어나면 업로드 한 파일이 사라지니 주의해주세요!
            </StyledDiv>
            <ButtonContainer>
              <button type="button" onClick={handleConfirm}>
                <img src="/images/file-bookmark.svg" alt="bookmark" />
                특허 등록 가능성 검토 신청서 확인하기
              </button>
            </ButtonContainer>
          </>
        ) : (
          <ConfirmForm
            handleConfirm={handleConfirm}
          />
        )}
        <MoveButton type="button" link="patent-review/complete" disabled={false} />
      </Container>
    </Section>
  );
}