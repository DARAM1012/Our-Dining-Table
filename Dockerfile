# 1. Node 이미지
FROM node:18

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. package.json 복사 및 의존성 설치
COPY package*.json ./
RUN npm install

# 4. 전체 코드 복사 (server.js 포함!)
COPY . .

# 5. 포트 노출
EXPOSE 8080

# 6. 실행 명령
CMD ["node", "server.js"]
