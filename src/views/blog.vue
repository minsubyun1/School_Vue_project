<template>
    <div class="blog_nain">
        <div class="search">
            <div class="input_int d-flex">
                <div class="input_b">
                    <input type="text" class="input_box">
                </div>
                <div class="input_search">
                    <div class="search_box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-search blog_search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="move d-flex mt-4">
            <div class="prev">
                <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                </svg> 이전 글</p>
            </div>
            <div class="next ms-4">
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg> 다음 글</p>
            </div>
            <div class="candidate ms-4">
                <p>목록</p>
            </div>
        </div>
        <div class="left_tag">
            <div class="Major">
                <h3>Major</h3>
            </div>
            <div class="major_detail_1 mt-2">
                <p>경영정보</p>
            </div>
            <div class="major_detail_1">
                <p>경영정보</p>
            </div>
            <div class="major_detail_1">
                <p>경영정보</p>
            </div>
        </div>
        <div class="blog_main">
            <div class="mis_board_name">
                <p>경영정보 게시판 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg></p>
            </div>
            <div class="mis_board_title">
                <h1>경영통계 오전 1조 팀플 자료 공유해요~! <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" class="bi bi-suit-heart-fill mb-2" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                    </svg>
                </h1>
            </div>
            <div class="mis_board_sub1 d-flex">
                <div class="student_name">
                    <p>20 윤민섭</p>
                </div>
                <div class="student_grade ms-4">
                    <p>학점 A</p>
                </div>
                <div class="paste d-flex">
                    <div class="paste_comment">
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-chat-right-dots-fill" viewBox="0 0 16 16">
                            <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                            </svg> 댓글 7
                        </p>
                    </div>
                    <div class="real_paste ms-3">
                        <p>URL복사 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                </svg>
                        </p>
                    </div>
                </div>
            </div>
            <div class="mis_board_pro d-flex">
                <div class="mis_board_proName">
                    <p>경영통계 21-1학기 곽기영 교수님</p>
                </div>
                <div class="mis_board_date">
                    <p>2021.09.19</p> 
                </div>
                <div class="mis_board_time ms-3">
                    <p>2:12 </p>   
                </div>
                <div class="mis_board_inquery ms-3">
                    <p>조회 144</p>   
                </div>
            </div>
            <div class="mis_board_greeting">
                <div class="hi">
                    <h2>안녕하세요 여러분~!~!</h2>
                    <h2>경영 통계 팀플 자료를 공유해보려구 해요~^^</h2>
                </div>
            </div>
            <div class="mis_board_img">
                <img src="./images/bravo.jpg" class="img-fluid">
            </div>
            <div class="mis_board_file">
                <h2>자료는 첨부 파일을 확인해주세요~</h2>
                <h2>다들 시험 공부 화이팅~~<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-suit-heart-fill mb-2" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                    </svg></h2>
            </div>
            <div class="mis_board_detail">
                <p>20 윤민섭님의 게시글 더보기 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg></p>
            </div>
            <div class="board_heart_commen d-flex">
                <div class="board_heart">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-suit-heart-fill mb-2" viewBox="0 0 16 16">
                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                        </svg> 좋아요 2 
                    </p>
                </div>
                <div class="board_comment ms-4">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-chat-right-dots-fill" viewBox="0 0 16 16">
                                <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg> 댓글 7
                    </p>
                </div>
                <div class="board_share">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-share-fill mb-2" viewBox="0 0 16 16">
                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                        </svg> 공유하기</p>
                </div>
            </div>
            <div class="write_comment d-flex mt-3">
                <div class="comment_name">
                    <p>댓글</p>
                </div>
                <div class="comment_regist ms-2">
                    <p>등록순</p>
                </div>
                <div class="comment_recent ms-2">
                    <p>최신순</p>
                </div>
            </div>
            <div class="write_down_comment1">
                <p><font class="dayon_name">20 유동근</font></p>
                <p>헉 ㅠㅠ 자료 공유해주셔서 감사합니다..!! 시험 공부 화이팅하세요!! <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-suit-heart-fill mb-2" viewBox="0 0 16 16">
                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                        </svg>
                </p>
            </div>
            <div class="write_dowm_to d-flex">
                <div class="write_down_date">
                    <p>2021.09.19</p>
                </div>
                <div class="write_down_time ms-4">
                    <p>03:30</p>
                </div>
                <div class="write_down_time ms-4">
                    <p>답글 쓰기</p>
                </div>
            </div>
            <div class="write_down_comment2 mt-2">
                <div class="editor d-flex">
                    <div class="editor_name">
                        <p class="lee">20 윤민섭</p>
                    </div>
                    <div class="editor_emp ms-1">
                        <p>작성자</p>
                    </div>
                </div>
                <p> 화이팅 !! <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-emoji-laughing mb-1" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
                        </svg>
                </p>
            </div>
            <div class="write_dowm_to2 d-flex">
                <div class="write_down_date">
                    <p>2021.09.19</p>
                </div>
                <div class="write_down_time ms-4">
                    <p>03:30</p>
                </div>
                <div class="write_down_time ms-4">
                    <p>답글 쓰기</p>
                </div>
            </div>
            <div class="recommend_write mt-2">
                <div class="recommend_name mt-3 ms-4">
                    <p>20 윤민섭</p>
                </div>
                <div class="recommend_commen mt-3 ms-4">
                    <p>댓글을 남겨보세요.</p>
                </div>
                <div class="recommend_deco d-flex ms-4">
                    <div class="recommend_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
                        </svg>
                    </div>
                    <div class="recoomend_regist">
                        <p>등록</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog_footer mt-3 d-flex">
            <div class="blog_footer_write">
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                </svg><font class="blue">글쓰기</font></p>
            </div>
            <div class="blog_footer_reply ms-4">
                <p>답글</p>
            </div>
            <div class="blog_footer_request">
                <p>문의</p>
            </div>
            <div class="blog_footer_top ms-4">
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                    </svg> TOP
                </p>
            </div>
        </div>
        <div class="total_list mt-4">
            <h1>전체글</h1>
        </div>
        <div class="blog_list d-flex mt-4">
            <div class="list_major ms-4">
                <p>경영통계</p>
            </div>
            <div class="list_title ms-4">
                <p>경영통계 오전 1조 팀플 자료 공유해요!!</p>
            </div>
            <div class="list_grade">
                <p>A</p>
            </div>
            <div class="list_date ms-4">
                <p>2021.09.19</p>
            </div>
        </div>
        <div class="blog_list d-flex mt-3">
            <div class="list_major ms-4">
                <p>경영통계</p>
            </div>
            <div class="list_title ms-4">
                <p>경영통계 오전 1조 팀플 자료 공유해요!!</p>
            </div>
            <div class="list_grade">
                <p>A</p>
            </div>
            <div class="list_date ms-4">
                <p>2021.09.19</p>
            </div>
        </div>
        <div class="blog_list d-flex mt-3">
            <div class="list_major ms-4">
                <p>경영통계</p>
            </div>
            <div class="list_title ms-4">
                <p>경영통계 오전 1조 팀플 자료 공유해요!!</p>
            </div>
            <div class="list_grade">
                <p>A</p>
            </div>
            <div class="list_date ms-4">
                <p>2021.09.19</p>
            </div>
        </div>
        <div class="blog_list d-flex mt-3">
            <div class="list_major ms-4">
                <p>경영통계</p>
            </div>
            <div class="list_title ms-4">
                <p>경영통계 오전 1조 팀플 자료 공유해요!!</p>
            </div>
            <div class="list_grade">
                <p>A</p>
            </div>
            <div class="list_date ms-4">
                <p>2021.09.19</p>
            </div>
        </div>
    </div>
</template>