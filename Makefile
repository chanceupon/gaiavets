ccred=\033[0;31m
ccyellow=\033[0;33m
ccend=\033[0m

SERVER_IP = 13.212.44.78
DEPLOY_BRANCH = develop

PRODUCTION_SERVER_IP = 175.41.150.142
PRODUCTIONDEPLOY_BRANCH = develop

deploy_develop: print_detail exec_develop_cmd clean

deploy_production: print_detail exec_production_cmd clean

print_detail:
	@echo "...${ccred}PRODUCTION DEPLOY${ccend}..."

exec_develop_cmd:
	@echo "...${ccyellow}Pushing to BACKEND SERVER server${ccend}..."
	@git push origin ${DEPLOY_BRANCH}
	@echo "...${ccyellow}Connecting SERVER server${ccend}..."
	@ssh ubuntu@${SERVER_IP} -t "source .nvm/nvm.sh \
		&& source .profile \
		&& source .bashrc \
		&& cd ~/project/website  \
		&& git pull origin ${DEPLOY_BRANCH} \
		&& yarn install \
		&& yarn build \
		&& pm2 restart website \
		&& exit"
	@echo "...${ccred}Deploy BACKEND done${ccend}..."
	@echo "${ccred}==============================${ccend}"


exec_production_cmd:
	@echo "...${ccyellow}Pushing to BACKEND SERVER server${ccend}..."
	@git push origin ${PRODUCTIONDEPLOY_BRANCH}
	@echo "...${ccyellow}Connecting SERVER server${ccend}..."
	@ssh ubuntu@${PRODUCTION_SERVER_IP} -t "source .nvm/nvm.sh \
		&& source .profile \
		&& source .bashrc \
		&& cd ~/projects/website  \
		&& git pull origin ${PRODUCTIONDEPLOY_BRANCH} \
		&& yarn install \
		&& yarn build \
		&& pm2 restart website \
		&& exit"
	@echo "...${ccred}Deploy BACKEND done${ccend}..."
	@echo "${ccred}==============================${ccend}"

clean:
	@echo "${ccyellow}Deploy done${ccend}"