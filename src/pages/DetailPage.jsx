import { doc, getDoc } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { db } from '../shared/firebase';

function DetailPage() {
    const param = useParams();
    //홈에서 넘어올때 navigate에 정보를 담아서 보낸다
    //ariticle문서에서 param을 통해 mapß
    //여기서 id값을 찾는 쿼리를 보낸다. => 한개만 받으려면?query에서 getDocs가아닌 getDoc만 하고싶은데./,....
    //Expected type 'DocumentReference', but it was: a custom Query object 이게
    const [article, setArticle] = useState('');

    useEffect(() => {
        // const selectedPost
        const getArticle = async () => {
            const articleRef = doc(db, 'Post', param.id);
            // const q = query(articleRef);
            // const q = query(articleRef, where('id', '==', param.id));
            const article = await getDoc(articleRef);
            // const article = querySnapshot.docs.map((item) => item.data())[0];
            setArticle(article.data());
        };
        getArticle();
    }, []);

    return (
        <>
            <Container>
                <Wrap>
                    <Title>{article.title}</Title>
                    <div
                        style={{
                            width: '100vw',
                            borderTop: '1px solid black'
                        }}
                    ></div>
                    <ProfileWrap>
                        <Profilephoto>
                            <Img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefmUiYhLM1ZMdSLeZFIjEy_w-4FT18sVxROf8yaaPgnlVLwKJt0D7sEmhSgxBfgDUQMs&usqp=CAU'
                                alt='프로필사진'
                            />
                        </Profilephoto>
                        <p>{article.nickname}</p>
                    </ProfileWrap>

                    <ImageWrap>
                        <Img src={article.image} />
                    </ImageWrap>

                    <Content>{article.content} </Content>
                </Wrap>
            </Container>
        </>
    );
}

export default DetailPage;
const Profilephoto = styled.figure`
    width: 50px;
    height: 50px;
`;
const ProfileWrap = styled.div`
    width: 800px;
    display: flex;
    align-items: center;
    margin: 50px;
    gap: 20px;
`;
const Title = styled.div`
    display: flex;
    justify-content: center;
    width: 760px;
    height: 120px;
    font-size: 50px;
    font-family: GmarketSansMedium;
    /* margin: 150px auto 30px auto; */
    padding: 20px;
    border: none;
    outline: none;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 200vh;
`;

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80vw;
    height: 180vh;
`;

const ImageWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 800px;
    height: 800px;
    background-color: white;
    margin: 0 auto;
    border: 2px solid black;
    overflow: hidden;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    width: 760px;
    height: 200px;
    padding: 20px;
    margin: 50px auto 0 auto;
    font-size: 25px;
    font-family: GmarketSansMedium;
    resize: none;
    background: none;
    border-width: 0 0 2px;
    border-color: black;
    outline: none;
`;
