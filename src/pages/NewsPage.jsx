import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
    // 카테고리가 선택되지 않았으면 기본값 all로 사용
    const category = match.params.category || 'all';

    return (
        <>
            <h5>카테고리를 선택해주세요</h5> 
            <Categories />
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;