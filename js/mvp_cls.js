var myChart = echarts.init(document.getElementById('mvp_cls'))

        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            series: [
                
                {
                    name: '数据',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: ['0%', '5%'],
                    label: {
                        normal: {
                        position: 'center',
                        show: true,
                        textStyle: {"fontSize": 20 },
                        padding:[0,0],
                        },
                        
                    },
                    itemStyle:{
                        borderWidth:2, //设置border宽度
                        borderColor:'#fff',
                    },
                    labelLine: {
                        show: false
                    },
                    color: ['#fff'],
                    data: [
                        {value: 1, name: 'MVPNet'},
                    ]
                },

                {
                    name: '数据',
                    type: 'pie',
                    radius: ['15%', '40%'],
                    label: {
                        position: 'outer',
                        textStyle: {"fontSize": 8, fontWeight: 'bolder'}
                    },
                    color: ['#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200', '#4bddc8', '#87C5ED', '#F09191', '#FCDFA5', '#F08200'],
                    itemStyle:{
                        borderWidth:1,
                        borderColor:'#fff',
                    },
                    data: [
                    {value: 3.8243665717885307, name: 'Bag', label:{normal:{rotate:88.08781671410574}}},
                    {value: 5.644160328496104, name: 'Bottle', label:{normal:{rotate:83.35355326396342}}},
                    {value: 0.06719238486304886, name: 'Wahser', label:{normal:{rotate:80.49787690728384}}},
                    {value: 0.36955811674676875, name: 'Vessel', label:{normal:{rotate:80.27950165647894}}},
                    {value: 0.03359619243152443, name: 'Train', label:{normal:{rotate:80.07792450188978}}},
                    {value: 5.532173020391022, name: 'Telephone', label:{normal:{rotate:77.29503989547851}}},
                    {value: 0.10638794269982735, name: 'Table', label:{normal:{rotate:74.47575941393308}}},
                    {value: 0.06159301945779478, name: 'Stove', label:{normal:{rotate:74.39176893285426}}},
                    {value: 0.11198730810508144, name: 'Sofa', label:{normal:{rotate:74.30497876907283}}},
                    {value: 0.705520041062013, name: 'Rifle', label:{normal:{rotate:73.89622509448928}}},
                    {value: 4.149129765293266, name: 'Pistol', label:{normal:{rotate:71.46890019131165}}},
                    {value: 0.03359619243152443, name: 'Printer', label:{normal:{rotate:69.37753721244924}}},
                    {value: 0.8846997340301432, name: 'Flowerpot', label:{normal:{rotate:68.91838924921841}}},
                    {value: 3.2308338388315994, name: 'Pillow', label:{normal:{rotate:66.86062246278753}}},
                    {value: 0.016798096215762216, name: 'Piano', label:{normal:{rotate:65.23680649526385}}},
                    {value: 3.852363398814801, name: 'Mug', label:{normal:{rotate:63.30222574774856}}},
                    {value: 0.12318603891558956, name: 'Motorcycle', label:{normal:{rotate:61.31445102888336}}},
                    {value: 0.09518921188931921, name: 'Microwave', label:{normal:{rotate:61.205263403480906}}},
                    {value: 0.10078857729457329, name: 'Microphone', label:{normal:{rotate:61.107274508888956}}},
                    {value: 0.0, name: 'Mailbox', label:{normal:{rotate:61.05688022024167}}},
                    {value: 0.20717651999440062, name: 'Loudspeaker', label:{normal:{rotate:60.95329196024447}}},
                    {value: 0.016798096215762216, name: 'Laptop', label:{normal:{rotate:60.84130465213939}}},
                    {value: 2.346134104801456, name: 'Lamp', label:{normal:{rotate:59.659838551630784}}},
                    {value: 0.8119079837618403, name: 'Pot', label:{normal:{rotate:58.08081750734913}}},
                    {value: 3.6115906863888756, name: 'Helmet', label:{normal:{rotate:55.86906817227377}}},
                    {value: 0.022397461621016284, name: 'Guitar', label:{normal:{rotate:54.05207409826883}}},
                    {value: 0.03359619243152443, name: 'Bookshelf', label:{normal:{rotate:54.024077271242554}}},
                    {value: 6.204096869021511, name: 'Faucet', label:{normal:{rotate:50.90523074051604}}},
                    {value: 2.1725537772385795, name: 'Earphone', label:{normal:{rotate:46.716905417385995}}},
                    {value: 0.10078857729457329, name: 'Display', label:{normal:{rotate:45.58023424011942}}},
                    {value: 0.005599365405254071, name: 'Dishwasher', label:{normal:{rotate:45.527040268769504}}},
                    {value: 0.6495263870094723, name: 'Computer keyboard', label:{normal:{rotate:45.199477392562144}}},
                    {value: 3.986748168540899, name: 'Clock', label:{normal:{rotate:42.88134011478696}}},
                    {value: 0.9070971956511595, name: 'Chair', label:{normal:{rotate:40.43441743269093}}},
                    {value: 5.106621249591713, name: 'Car', label:{normal:{rotate:37.42755821006949}}},
                    {value: 1.6854089869814755, name: 'Cap', label:{normal:{rotate:34.0315430917829}}},
                    {value: 4.518687882040036, name: 'Can', label:{normal:{rotate:30.92949465727214}}},
                    {value: 0.17358032756287622, name: 'Camera', label:{normal:{rotate:28.583360552470687}}},
                    {value: 0.12878540432084362, name: 'Caninet', label:{normal:{rotate:28.432177686528824}}},
                    {value: 0.05599365405254072, name: 'Bus', label:{normal:{rotate:28.33978815734213}}},
                    {value: 1.8477905837338435, name: 'Bowl', label:{normal:{rotate:27.38789603844894}}},
                    {value: 0.7447155988987915, name: 'Bicycle', label:{normal:{rotate:26.091642947132623}}},
                    {value: 0.07279175026830292, name: 'Bench', label:{normal:{rotate:25.682889272549076}}},
                    {value: 0.02799682702627036, name: 'Bed', label:{normal:{rotate:25.63249498390179}}},
                    {value: 0.04479492324203257, name: 'Bathtub', label:{normal:{rotate:25.59609910876764}}},
                    {value: 1.730203910223508, name: 'Basket', label:{normal:{rotate:24.708599692034866}}},
                    {value: 0.8623022724091269, name: 'Ashcan', label:{normal:{rotate:23.41234660071855}}},
                    {value: 0.6887219448462507, name: 'Airplane', label:{normal:{rotate:22.63683449209086}}},
                    {value: 0.470346694041342, name: 'Umbrella', label:{normal:{rotate:22.057300172647064}}},
                    {value: 3.925155149083104, name: 'Plush toy', label:{normal:{rotate:19.85954925108484}}},
                    {value: 3.8355653025990386, name: 'Toy figure', label:{normal:{rotate:15.979189025243768}}},
                    {value: 0.8343054453828566, name: 'Towel', label:{normal:{rotate:13.644253651252821}}},
                    {value: 3.482805282068032, name: 'Toy bear', label:{normal:{rotate:11.485698287527377}}},
                    {value: 1.5454248518501235, name: 'Toy cat', label:{normal:{rotate:8.971583220568299}}},
                    {value: 0.27996827026270354, name: 'Toy bird', label:{normal:{rotate:8.058886659511886}}},
                    {value: 2.5701087210116187, name: 'Toy insect', label:{normal:{rotate:6.633848163874726}}},
                    {value: 4.339508189071905, name: 'Toy cow', label:{normal:{rotate:3.1790397088329634}}},
                    {value: 0.24077271242592507, name: 'Toy dog', label:{normal:{rotate:0.8888992580840482}}},
                    {value: 4.49629042041902, name: 'Toy monkey', label:{normal:{rotate:-1.4796323083384242}}},
                    {value: 0.005599365405254071, name: 'Toy elephant', label:{normal:{rotate:-3.730577201250561}}},
                    {value: 4.143530399888013, name: 'Toy fish', label:{normal:{rotate:-5.805142083897195}}},
                    {value: 4.440296766366479, name: 'Toy horse', label:{normal:{rotate:-10.09705566702444}}},
                    {value: 4.3507069198824135, name: 'Toy sheep', label:{normal:{rotate:-14.492557510148885}}},
                    {value: 0.24637207783117912, name: 'Toy mouse', label:{normal:{rotate:-16.791097009005682}}},
                    {value: 2.3125379123699314, name: 'Toy tiger', label:{normal:{rotate:-18.070552004106236}}},
                    {value: 4.529886612850544, name: 'Toy rabbit', label:{normal:{rotate:-21.491764266716473}}},
                    {value: 1.4446362745555505, name: 'Toy dragon', label:{normal:{rotate:-24.479025710419517}}},
                    {value: 0.011198730810508142, name: 'Toy snake', label:{normal:{rotate:-25.206943213102544}}},
                    {value: 0.391955578367785, name: 'Toy chook', label:{normal:{rotate:-25.408520367691693}}},
                    {value: 4.020344360972423, name: 'Toy pig', label:{normal:{rotate:-27.614670337361797}}},
                    {value: 4.473892958798003, name: 'Rice cooker', label:{normal:{rotate:-31.86178899724701}}},
                    {value: 5.358592692828147, name: 'Pressure cooker', label:{normal:{rotate:-36.77803182306009}}},
                    {value: 0.022397461621016284, name: 'Toaster', label:{normal:{rotate:-39.468526900284665}}},
                    {value: 0.0, name: 'Dryer', label:{normal:{rotate:-39.47972563109518}}},
                    {value: 4.1267323036722505, name: 'Blackboard eraser', label:{normal:{rotate:-41.543091782931306}}},
                    {value: 0.43115113620456347, name: 'Bucket', label:{normal:{rotate:-43.82203350286971}}},
                    {value: 4.244318977182586, name: 'Candle', label:{normal:{rotate:-46.15976855956328}}},
                    {value: 0.0, name: 'Cassette', label:{normal:{rotate:-48.281928048154576}}},
                    {value: 0.940693388082684, name: 'Computer mouse', label:{normal:{rotate:-48.752274742195915}}},
                    {value: 0.005599365405254071, name: 'Easel', label:{normal:{rotate:-49.22542111893989}}},
                    {value: 4.636274555550371, name: 'Fan', label:{normal:{rotate:-51.5463580794177}}},
                    {value: 0.13998413513135177, name: 'Cookie', label:{normal:{rotate:-53.934487424758565}}},
                    {value: 4.311511362045635, name: 'Fries', label:{normal:{rotate:-56.160235173347054}}},
                    {value: 0.16798096215762212, name: 'Donut', label:{normal:{rotate:-58.399981335448686}}},
                    {value: 0.005599365405254071, name: 'Coat rack', label:{normal:{rotate:-58.48677149923012}}},
                    {value: 0.0, name: 'Guitar stand', label:{normal:{rotate:-58.489571181932746}}},
                    {value: 0.10078857729457329, name: 'Can opener', label:{normal:{rotate:-58.539965470580036}}},
                    {value: 0.5151416172833745, name: 'Flashlight', label:{normal:{rotate:-58.84793056786901}}},
                    {value: 4.395501843124445, name: 'Hammer', label:{normal:{rotate:-61.30325229807292}}},
                    {value: 1.56782231347114, name: 'Screw driver', label:{normal:{rotate:-64.28491437637071}}},
                    {value: 3.3988148009892214, name: 'Jug', label:{normal:{rotate:-66.76823293360088}}},
                    {value: 0.25757080864168724, name: 'Chopsticks', label:{normal:{rotate:-68.59642573841634}}},
                    {value: 0.13438476972609772, name: 'Spoon', label:{normal:{rotate:-68.79240352760024}}},
                    {value: 0.078391115673557, name: 'Ladder', label:{normal:{rotate:-68.89879147030007}}},
                    {value: 0.6215295599832019, name: 'Ceiling lamp', label:{normal:{rotate:-69.24875180812845}}},
                    {value: 0.011198730810508142, name: 'Wall lamp', label:{normal:{rotate:-69.56511595352531}}},
                    {value: 0.10638794269982735, name: 'Light switch', label:{normal:{rotate:-69.62390929028047}}},
                    {value: 6.153702580374224, name: 'Paper box', label:{normal:{rotate:-72.75395455181749}}},
                    {value: 0.0, name: 'Wheelchair', label:{normal:{rotate:-75.83080584200461}}},
                    {value: 3.3372217815314262, name: 'Walking stick', label:{normal:{rotate:-77.49941673277033}}},
                    {value: 0.10078857729457329, name: 'Shower', label:{normal:{rotate:-79.21842191218332}}},
                    {value: 0.03359619243152443, name: 'Toilet', label:{normal:{rotate:-79.28561429704638}}},
                    {value: 0.10638794269982735, name: 'Sink', label:{normal:{rotate:-79.35560636461206}}},
                    {value: 0.313564462694228, name: 'Power socket', label:{normal:{rotate:-79.56558256730908}}},
                    {value: 7.75512108627689, name: 'Bagged snacks', label:{normal:{rotate:-83.59992534179464}}},
                    {value: 0.05039428864728664, name: 'Tripod', label:{normal:{rotate:-87.50268302925673}}},
                    {value: 0.20717651999440062, name: 'Selfie stick', label:{normal:{rotate:-87.63146843357757}}},
                    {value: 0.30236573188371985, name: 'Hair dryer', label:{normal:{rotate:-87.88623955951664}}},
                    {value: 5.599365405254071, name: 'Lipstick', label:{normal:{rotate:89.16289487191446}}},
                    {value: 3.0516541458634685, name: 'Sanitary napkin', label:{normal:{rotate:84.83738509635569}}},
                    {value: 3.807568475572768, name: 'Toilet paper', label:{normal:{rotate:81.40777378563757}}},
                    {value: 2.0045728150809574, name: 'Rockery', label:{normal:{rotate:78.50170314031071}}},
                    {value: 1.5566235826606318, name: 'Chinese hot dishes', label:{normal:{rotate:76.72110494143992}}},
                    {value: 0.022397461621016284, name: 'Root carving', label:{normal:{rotate:75.93159441929909}}},
                    {value: 0.011198730810508142, name: 'Flower', label:{normal:{rotate:75.91479632308332}}},
                    {value: 14.334375437450424, name: 'Book', label:{normal:{rotate:68.74200923895286}}},
                    {value: 3.415612897204983, name: 'Pipe PVC Metal pipe', label:{normal:{rotate:59.86701507162516}}},
                    {value: 0.0, name: 'Projector', label:{normal:{rotate:58.15920862302268}}},
                    {value: 0.06159301945779478, name: 'Cabinet Air Conditioner', label:{normal:{rotate:58.12841211329378}}},
                    {value: 0.005599365405254071, name: 'Desk Air Conditioner', label:{normal:{rotate:58.09481592086226}}},
                    {value: 0.02799682702627036, name: 'Refrigerator', label:{normal:{rotate:58.078017824646494}}},
                    {value: 1.7470020064392702, name: 'Percussion', label:{normal:{rotate:57.19051840791373}}},
                    {value: 0.6887219448462507, name: 'Strings', label:{normal:{rotate:55.97265643227095}}},
                    {value: 0.0, name: 'Wind instruments', label:{normal:{rotate:55.628295459847834}}},
                    {value: 0.19037842377863842, name: 'Balloons', label:{normal:{rotate:55.533106247958514}}},
                    {value: 0.05039428864728664, name: 'Scarf', label:{normal:{rotate:55.41271989174555}}},
                    {value: 5.498576827959498, name: 'Shoe', label:{normal:{rotate:52.638234333442156}}},
                    {value: 3.2308338388315994, name: 'Skirt', label:{normal:{rotate:48.27352900004661}}},
                    {value: 6.0361159068638885, name: 'Pants', label:{normal:{rotate:43.64005412719888}}},
                    {value: 1.8309924875180814, name: 'Clothing', label:{normal:{rotate:39.70649993000788}}},
                    {value: 0.21837525080490877, name: 'Box', label:{normal:{rotate:38.68181606084639}}},
                    {value: 5.526573654985769, name: 'Soccer', label:{normal:{rotate:35.80934160795104}}},
                    {value: 3.7011805328729412, name: 'Roast Duck', label:{normal:{rotate:31.195464514021666}}},
                    {value: 5.576967943633055, name: 'Pizza', label:{normal:{rotate:26.556390275768678}}},
                    {value: 4.658672017171387, name: 'Ginger', label:{normal:{rotate:21.438570295366446}}},
                    {value: 4.675470113387149, name: 'Cauliflower', label:{normal:{rotate:16.77149923008716}}},
                    {value: 1.3046521394241986, name: 'Broccoli', label:{normal:{rotate:13.781438103681495}}},
                    {value: 2.900471279921609, name: 'Cabbage', label:{normal:{rotate:11.678876394008597}}},
                    {value: 5.095422518781205, name: 'Eggplant', label:{normal:{rotate:7.680929494657164}}},
                    {value: 5.66655779011712, name: 'Pumpkin', label:{normal:{rotate:2.2999393402080273}}},
                    {value: 0.011198730810508142, name: 'winter melon', label:{normal:{rotate:-0.5389389202557879}}},
                    {value: 6.484065139284215, name: 'Tomato', label:{normal:{rotate:-3.786570855303154}}},
                    {value: 2.032569642107228, name: 'Corn', label:{normal:{rotate:-8.044888245998862}}},
                    {value: 0.0, name: 'Sunflower', label:{normal:{rotate:-9.061173067052493}}},
                    {value: 0.32476319350473615, name: 'Potato', label:{normal:{rotate:-9.223554663804862}}},
                    {value: 2.3069385469646773, name: 'Sweet potato', label:{normal:{rotate:-10.53940553403956}}},
                    {value: 0.867901637814381, name: 'Chinese cabbage', label:{normal:{rotate:-12.12682562642911}}},
                    {value: 1.7526013718445244, name: 'Onion', label:{normal:{rotate:-13.437077131258576}}},
                    {value: 2.5421118939853486, name: 'Momordica charantia', label:{normal:{rotate:-15.584433764173497}}},
                    {value: 7.503149643040456, name: 'Chili', label:{normal:{rotate:-20.607064532686394}}},
                    {value: 5.504176193364752, name: 'Cucumber', label:{normal:{rotate:-27.110727450888987}}},
                    {value: 0.0391955578367785, name: 'Grapefruit', label:{normal:{rotate:-29.88241332648974}}},
                    {value: 4.658672017171387, name: 'Jackfruit', label:{normal:{rotate:-32.23134711399385}}},
                    {value: 0.02799682702627036, name: 'Star fruit', label:{normal:{rotate:-34.57468153609267}}},
                    {value: 4.294713265829873, name: 'Avocado', label:{normal:{rotate:-36.73603658252077}}},
                    {value: 4.535485978255798, name: 'Shakyamuni', label:{normal:{rotate:-41.151136204563585}}},
                    {value: 3.9587513415146285, name: 'Coconut', label:{normal:{rotate:-45.3982548644488}}},
                    {value: 0.32476319350473615, name: 'Pineapple', label:{normal:{rotate:-47.54001213195849}}},
                    {value: 0.5823340021464234, name: 'Kiwi', label:{normal:{rotate:-47.993560729784065}}},
                    {value: 3.874760860435817, name: 'Pomegranate', label:{normal:{rotate:-50.22210816107517}}},
                    {value: 0.022397461621016284, name: 'Pawpaw', label:{normal:{rotate:-52.17068732210362}}},
                    {value: 0.45354859782557977, name: 'Watermelon', label:{normal:{rotate:-52.40866035182691}}},
                    {value: 4.345107554477159, name: 'Apple', label:{normal:{rotate:-54.80798842797827}}},
                    {value: 1.0582800615930195, name: 'Banana', label:{normal:{rotate:-57.50968223601333}}},
                    {value: 5.767346367411693, name: 'Pear', label:{normal:{rotate:-60.9224954505157}}},
                    {value: 5.140217442023237, name: 'Cantaloupe', label:{normal:{rotate:-66.37627735523319}}},
                    {value: 4.244318977182586, name: 'Durian', label:{normal:{rotate:-71.06854556483609}}},
                    {value: 1.1310718118613226, name: 'Persimmon', label:{normal:{rotate:-73.75624095935805}}},
                    {value: 5.089823153375951, name: 'Grape', label:{normal:{rotate:-76.86668844197669}}},
                    {value: 5.644160328496104, name: 'Peach', label:{normal:{rotate:-82.23368018291274}}},
                    {value: 4.944239652839345, name: 'Power strip', label:{normal:{rotate:-87.52788017358046}}},
                    {value: 0.0, name: 'Racket', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Toy butterfly ', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Toy duck', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Toy turtle', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Bath sponge', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Glove', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Badminton', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Lantern', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Tricycle', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Chestnut', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Accessory', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Axe', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Shovel', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Cigarette', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Stapler', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Lighter', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Bread', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Key', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Toothpaste', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Swin ring', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Watch', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Telescope', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Eggs', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Bun', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Guava', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Okra', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Tangerine', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Lotus root', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Taro', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Lemon', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Garlic', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Mango', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Sausage', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Besom', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Mop', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Lock', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Ashtray', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Doorknob', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Conch', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Seafood', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Extinguisher', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Hairbrush', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Ice cream', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Razor', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Adhesive hook', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Hand Warmer', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Quilt', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Scales', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Thermometer', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Bell', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Sugarcane', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Adapter(Water pipe)', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Calendar', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Cleaner', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'End table', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Electronic mosquito swatter', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Electronic mosquito killer', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Heating radiator', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Humidifier', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Insecticide', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Luggage case', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Electric saw', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Electric drill', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Inflator', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Ironmongery', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Bulb', label:{normal:{rotate:-90.00000000000017}}},
                    {value: 0.0, name: 'Stirrer', label:{normal:{rotate:-90.00000000000017}}},
                    ]
                }
            ]
        };

        myChart.setOption(option);