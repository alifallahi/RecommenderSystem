M = [[5,0,0.5,1,5],
     [2,0,5,4,0],
     [4,3,1,4,5],
     [4,1,5,5,2],
     [5,1,0,4,1]
    ]


def find_corated(user1,user2):
    corated_items = []
    for i in range(0, len(M[user1])):
        if M[user1][i] > 0 and M[user2][i] >0:
            corated_items.append(i)
    return(corated_items)
            


def avg_clac(user1,user2):
    user1rates = []
    user2rates = []
    avg_temp_user1 = 0
    avg_temp_user2 = 0
    avg_result = []
    
    corated_items = find_corated(user1,user2)
    
    for i in range(0, len(corated_items)):
        user1rates.append(M[user1][corated_items[i]])
        user2rates.append(M[user2][corated_items[i]])
        
    for i in range(0, len(user1rates)):
        avg_temp_user1 = avg_temp_user1 + user1rates[i]
        avg_temp_user2 = avg_temp_user2 + user2rates[i]
        
    avg_user1 = avg_temp_user1/len(user1rates)
    avg_result.append(avg_user1)
    
    avg_user2 = avg_temp_user2/len(user2rates)
    avg_result.append(avg_user2)

    print(avg_result)
    return(avg_result)



            

def PCC_calc(user_id):
    for j in range(user_id, len(M)-1):
        user_id2 = j+1
        
        pcc_numerator = 0
        pcc_denumerator1 = 0
        pcc_denumerator2 = 0
        
        corated_items = find_corated(user_id,user_id2)
        avg = avg_clac(user_id,user_id2)
        for i in corated_items:
            pcc_numerator = pcc_numerator +((M[user_id][i] - avg[0]) * (M[user_id2][i] - avg[1]))
            pcc_denumerator1 = pcc_denumerator1 +((M[user_id][i] - avg[0])**2)
            pcc_denumerator2 = pcc_denumerator2 +((M[user_id2][i] - avg[1])**2)
    
        print("PCC result between the users",user_id,"and",user_id2,"=",pcc_numerator / ((pcc_denumerator1  * pcc_denumerator2)**(1/2)))
    return(pcc_numerator / ((pcc_denumerator1  * pcc_denumerator2)**(1/2)) )
    
                      
for i in range(0, len(M)-1):
    PCC_calc(i)
    print("   ")
