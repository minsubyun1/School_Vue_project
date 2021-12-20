<template>
    <div class="write_main container">
        <div class="write_ex row">
            <div class="write col-sm-3">
                <h3>글쓰기</h3>
            </div>
            <div class="write_ex1 col-sm-9">
                <p>임시등록 | 0 <font class="register">등록</font></p>
            </div>
        </div>
        <div class="row write_select mt-3">
            <div class="col-xl-9 write_opt">
                <div class="row">
                    <div class="col-xl-12 opt">
                        <select class="one_sel me-4" name="pets" id="pet-select" >
                            <option value="">과목 선택</option>
                            <option value="dog">경영통계</option>
                            <option value="cat">유레카프로젝트</option>
                            <option value="hamster">HCI개론</option>
                            <option value="parrot">마케팅</option>
                        </select>
                        <select class="two_sel me-4" name="pets" id="pet-select" >
                            <option value="">담당 교수님 선택</option>
                            <option value="dog">곽기영</option>
                            <option value="cat">김남규</option>
                            <option value="hamster">정승렬</option>
                            <option value="parrot">박상준</option>
                        </select>
                        <select class="three_sel me-4" name="pets" id="pet-select" >
                            <option value="">해당 학기 선택</option>
                            <option value="dog">1학기</option>
                            <option value="cat">2학기</option>
                        </select>
                        <select class="four_sel" name="pets" id="pet-select" >
                            <option value="">학점 선택</option>
                            <option value="dog">3학점</option>
                            <option value="cat">2학점</option>
                            <option value="hamster">1학점</option>
                        </select>
                    </div>
                    <div class="col-xl-12 mt-3">
                        <input class="option_title" type="text" placeholder="제목을 입력해주세요.">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-folder icon-fold" viewBox="0 0 16 16">
                        <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 accept_1">
                <div class="accept_box">
                    <div class="accept_text1 d-flex">
                        <div class="accept_icon1 ms-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                        </svg></div>
                        <div class="accept_write1 ms-2"><p>댓글 허용</p></div>
                    </div>
                    <div class="accept_text1 d-flex">
                        <div class="accept_icon1 ms-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                        </svg></div>
                        <div class="accept_write1 ms-2"><p>복사 및 저장 허용</p></div>
                    </div>
                    <div class="accept_text1 d-flex">
                        <div class="accept_icon1 ms-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                        </svg></div>
                        <div class="accept_write1 ms-2"><p>외부 공유 허용</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="all_content">
            <input class="big_content" type="text">
        </div>
    </div>
</template>