const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// TODO: 라우터 정의
// localhost:PORT/ 기본 주소
router.get('/', controller.index);

// ~~~~~~~~~ 선수 관련 API ~~~~~~~~~
// get /players - 전체 선수 조회
/**
 * @swagger
 * /players:
 *   get:
 *     summary: 전체 선수 조회
 *     description: 전체 선수 조회 반환합니다.
 *     responses:
 *       200:
 *         description: 성공적으로 사용자 목록을 가져왔을 때 응답
 *       500:
 *         description: 서버 에러
 */
router.get('/players', controller.getPlayers);

// get /players/:player_id  - 특정 선수 조회
/**
 * @swagger
 * /players/{player_id}:
 *   get:
 *     summary: 특정 플레이어 데이터 가져오기
 *     description: 특정 플레이어의 데이터를 가져옵니다.
 *     parameters:
 *       - in: path
 *         name: player_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: 플레이어의 고유 ID
 *     responses:
 *       200:
 *         description: 성공적으로 데이터를 가져온 경우

 *       404:
 *         description: 플레이어를 찾을 수 없음
 *       500:
 *         description: 서버 에러
 */
router.get('/players/:player_id', controller.getPlayer);

// post /players - 선수 추가
router.post('/players', controller.postPlayer);

// patch /players/:player_id/team - 특정 선수의 소속 팀 변경
router.patch('/players/:player_id/team', controller.patchPlayer);

// delete /players/:player_id - 특정 선수 삭제
router.delete('/players/:player_id', controller.deletePlayer);

// ~~~~~~~~~ 팀 관련 API ~~~~~~~~~
// get /teams - 전체 팀 조회
router.get('/teams', controller.getTeams);

// get /teams/:team_id - 특정 팀 조회
router.get('/teams/:team_id', controller.getTeam);

// get /teams/:team_id/players - 특정 팀의 모든 선수 조회
router.get('/teams/:team_id/players', controller.getTeamPlayers);

module.exports = router;
