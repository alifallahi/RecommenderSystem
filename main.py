all_users_dict = {
"user1": [2,0,4,4,0,0,2,0,0,0,0,0,0,0,0,5,0,4,0,0,0,0,0,0,0,0,0,2,0,0],
"user2": [5,5,3,2,5,0,0,0,0,5,5,5,0,0,5,0,3,5,0,0,5,0,0,0,5,0,5,5,0,5],
"user3": [2,0,0,0,0,0,5,5,0,0,0,5,0,0,0,0,3,5,0,5,5,0,0,0,5,5,5,0,0,5],
"user4": [1,4,5,0,2,3,5,5,0,0,0,5,5,2,0,5,0,2,5,5,5,3,5,3,5,5,5,0,3,5],
"user5": [4,0,4,0,5,0,0,5,0,4,0,0,5,4,4,5,0,4,0,0,0,4,5,3,4,0,0,4,5,5],
"user6": [4,4,5,0,5,4,4,3,0,5,0,5,4,5,5,5,0,5,0,0,5,5,0,5,5,5,5,3,0,4],
"user7": [4,0,2,4,4,4,5,4,0,3,0,0,4,0,4,5,5,5,0,4,5,4,0,5,5,4,4,0,0,4],
"user8": [4,3,4,5,3,5,3,5,4,5,4,4,5,3,5,5,4,5,4,4,5,5,5,4,5,4,4,5,5,5],
"user9": [3,0,4,5,3,0,3,3,0,1,0,0,1,0,5,0,5,0,0,0,2,0,0,0,5,1,0,0,0,0],
"user10": [0,0,4,0,0,2,0,0,4,4,0,5,0,0,0,0,5,4,0,0,5,0,5,0,0,5,5,4,0,0],  
"user11": [3,0,0,4,4,0,0,5,0,0,2,4,5,4,3,0,0,4,5,5,4,3,5,4,4,0,4,0,0,5],
"user12": [3,1,0,0,5,2,5,0,5,0,5,5,0,0,4,5,0,3,3,0,5,0,5,3,2,5,5,1,4,5],
"user13": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
"user14": [5,4,4,5,3,5,5,5,5,5,5,5,5,3,5,5,5,5,4,3,5,5,5,4,5,5,5,3,3,3],
"user15": [5,0,4,0,5,0,0,0,0,0,0,3,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
"user16": [4,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,4,0,0,0,0,0],
"user17": [5,3,4,4,5,5,5,5,5,4,3,4,5,4,5,5,2,4,3,5,5,5,3,5,5,5,5,5,3,5],
"user18": [3,5,5,5,5,3,4,5,0,4,0,5,5,4,5,5,0,0,0,4,5,5,0,5,5,5,0,0,0,5],
"user19": [0,0,0,4,0,3,4,5,4,4,2,5,4,4,5,3,3,3,2,2,5,5,2,3,4,4,4,1,4,5],
"user20": [4,0,0,4,0,5,4,4,0,4,0,3,0,0,5,0,5,5,0,0,3,5,0,3,0,0,5,4,0,4],
"user21": [5,2,5,3,3,3,4,4,4,4,2,5,4,3,5,3,3,4,3,2,5,5,2,2,5,4,5,1,4,5],
"user22": [5,4,0,5,0,0,0,4,5,0,5,2,4,0,5,0,4,4,0,5,5,3,5,0,5,5,5,0,5,5],
"user23": [4,5,0,0,5,0,5,5,0,5,0,5,5,0,5,5,0,3,3,4,5,5,2,0,0,5,5,0,0,0],
"user24": [4,0,5,5,5,0,5,0,5,5,0,0,0,0,0,5,0,5,0,0,5,4,0,0,0,4,0,3,0,0],
"user25": [5,3,3,5,3,3,3,5,0,0,5,5,5,2,0,5,0,3,0,0,5,4,0,0,5,5,5,0,0,3],
"user26": [5,0,0,0,4,0,0,0,0,3,0,0,0,0,0,0,0,5,0,0,3,0,0,0,0,5,0,0,0,4],
"user27": [3,4,3,5,4,1,4,4,2,5,3,4,4,5,4,4,4,4,3,4,5,3,4,4,5,5,4,2,4,3],
"user28": [0,3,3,3,2,2,3,3,2,3,3,3,3,2,5,3,3,3,2,2,5,4,2,3,4,5,5,3,2,3],
"user29": [5,3,2,5,5,3,3,5,5,4,4,4,5,3,4,5,4,5,2,5,5,5,5,2,4,4,4,3,3,5],
"user30": [4,0,5,5,4,0,0,0,0,0,5,0,0,5,0,0,0,0,4,4,4,5,5,0,5,5,0,4,0,0],
"user31": [5,4,3,4,4,0,4,5,0,5,0,0,5,5,0,0,4,5,0,5,0,4,0,0,5,0,0,0,0,5],
"user32": [2,4,2,3,3,1,2,3,3,1,3,3,2,2,2,3,1,1,1,3,3,2,4,1,4,3,4,1,3,4],
"user33": [5,0,5,3,5,4,0,5,0,0,0,4,0,0,0,0,0,4,5,0,0,5,0,0,5,5,4,0,0,5],
"user34": [3,0,5,5,0,0,4,5,4,3,5,5,4,4,5,0,5,4,5,5,4,5,5,4,0,3,0,0,0,5],
"user35": [3,2,3,0,3,1,3,3,0,4,0,0,4,4,0,3,0,1,5,5,0,0,5,4,4,5,5,0,3,5],
"user36": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
"user37": [3,5,5,4,4,5,5,4,4,3,3,5,4,3,5,5,4,3,5,5,5,5,3,5,4,5,4,3,4,5],
"user38": [5,5,3,2,4,0,0,5,0,3,4,4,5,0,3,5,0,3,0,5,3,3,0,0,4,4,4,0,0,5],
"user39": [0,0,5,0,3,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,2,0,0,0,2,0,0,0,0],
"user40": [5,5,4,0,0,0,4,5,0,5,3,0,4,0,5,0,0,5,0,0,5,0,0,0,0,0,0,0,0,3],
"user41": [4,0,5,5,0,0,2,0,0,4,0,3,0,0,0,5,4,5,0,5,5,0,0,0,4,5,5,0,0,4],
"user42": [4,5,3,0,0,2,5,2,0,3,4,5,0,0,3,5,0,3,5,5,4,4,1,5,5,4,4,2,4,4],
"user43": [3,0,3,4,5,2,3,4,3,3,3,3,3,3,4,4,3,4,5,4,5,4,3,4,3,3,4,2,4,5],
"user44": [4,3,4,3,4,2,2,5,0,0,0,0,2,5,4,3,0,4,0,4,0,0,4,0,0,5,0,0,0,0],
"user45": [2,1,5,3,5,3,3,1,2,3,3,0,3,2,1,5,5,5,1,3,1,4,4,4,2,5,2,4,4,3],
"user46": [4,5,5,5,3,0,5,5,3,4,0,0,5,0,5,3,0,4,3,0,5,5,0,0,0,4,0,0,0,5],
"user47": [4,0,5,5,3,4,3,5,0,5,0,4,5,0,5,5,0,5,5,5,4,4,4,5,5,5,5,0,4,5],
"user48": [0,0,5,5,5,0,0,0,5,5,0,0,0,0,4,4,0,5,0,4,5,5,0,0,0,5,0,4,0,0],
"user49": [0,0,4,0,0,0,0,0,0,5,0,0,0,0,0,4,0,0,0,0,5,0,0,0,0,0,0,0,0,0],
"user50": [4,3,5,0,4,0,0,0,0,0,0,0,0,5,5,4,0,0,0,5,4,0,5,0,0,5,4,0,0,4],
"user51": [1,4,5,4,2,5,3,4,3,5,4,3,3,0,5,3,4,0,0,0,5,4,0,0,5,0,0,0,0,5],
"user52": [0,0,0,5,5,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,5,0,0,0,5,5,0,0,0,0],
"user53": [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,5,0,0,0,0,0,0,0,0,0],
"user54": [4,3,5,5,4,4,5,5,5,4,4,4,5,5,5,4,5,4,4,5,5,4,4,4,5,5,4,4,5,5],
"user55": [3,0,4,4,0,0,2,4,3,3,4,2,3,3,4,4,0,3,0,4,4,4,3,0,4,4,4,2,2,3],
"user56": [2,3,5,0,0,3,3,0,0,0,0,5,0,0,4,0,0,5,4,0,5,5,0,0,5,5,5,0,0,5],
"user57": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
"user58": [0,0,0,0,3,3,0,4,0,3,0,4,0,0,5,4,0,0,0,0,5,4,0,0,4,4,0,0,0,0],
"user59": [5,0,0,0,2,0,5,0,0,0,0,0,0,0,0,5,0,5,0,0,0,5,0,0,0,5,0,5,0,0],
"user60": [0,0,5,0,3,0,5,4,0,0,0,5,5,0,5,5,0,5,0,0,0,0,0,0,5,5,5,0,0,5],
"user61": [3,0,0,0,4,4,0,5,0,4,4,5,4,0,5,5,5,4,0,5,4,0,0,4,3,5,4,0,5,5],
"user62": [4,0,0,0,0,0,5,0,0,0,0,5,0,0,0,5,0,5,0,3,0,4,2,0,0,4,0,3,0,0],
"user63": [5,0,0,0,0,5,3,4,5,3,0,5,4,0,5,0,5,5,0,0,5,0,0,0,0,5,0,5,0,5],
"user64": [5,0,3,3,3,0,5,5,0,0,0,5,5,0,0,0,0,0,0,5,0,0,0,0,5,5,5,0,0,5],
"user65": [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,4,0,0,0,0,0],
"user66": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,3,5,0],
"user67": [5,2,1,5,5,2,1,3,1,5,5,3,5,5,5,5,5,5,5,5,2,5,4,2,5,1,5,1,1,5],
"user68": [3,2,2,2,3,4,3,4,2,2,0,2,2,2,4,4,0,3,2,1,0,4,2,2,3,4,3,4,3,5],
"user69": [5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,5,0,5,0,0,5,5,0,0,5,5,0,0,0,5]
}

################################################################################# pearson correlation coefficient START! #########################

def average_calculator(id_input):
    temp_sum = 0
    temp_quntity = 0
    y = "user"+str(id_input)
    list_input = all_users_dict[y]
    len_list_input = len(list_input)
    
    for x in list_input:
        temp_sum = temp_sum + x
        if x > 0:
            temp_quntity = temp_quntity + 1
    if (temp_sum>0 and temp_quntity>0):
        average_id_input = temp_sum / temp_quntity
    else:
        average_id_input = 0
    return average_id_input


def find_corated_items(array1, array2):
    temp_corated = []
    array1 = "user"+str(array1)
    array2 = "user"+str(array2)
    array1 = list_input = all_users_dict[array1]
    array2 = list_input = all_users_dict[array2]
    for x1 in range(0, len(array1)):
        if array1[x1] > 0 and  array2[x1] >0:
            temp_corated.append(x1)        
    return temp_corated
        

def pcc(user1, first_ID, last_ID):
#Pearson correlation coefficient calculator
    pcc_result_list = []
    y = "user"+str(user1)
    pcc_target_user = y
    target_user = all_users_dict[y]
    average_user1 = average_calculator(user1)
    for x1 in range(first_ID, last_ID+1):
        if x1 != user1:
            pcc_result = 0
            user2 = x1
            y2 = "user"+str(x1)
            user2_values = all_users_dict[y2]
            average_user2 = average_calculator(user2)
            if average_user2 > 0:
                corated_items = find_corated_items(user1, user2)
                temp_pcc_numerator = 0
                temp_pcc_denumerator1 = 0
                temp_pcc_denumerator2 = 0
                temp_pcc_denumerator_total = 0
                for x2 in corated_items:
                    temp_pcc_numerator = temp_pcc_numerator +(target_user[x2] - average_user1) * (user2_values[x2] - average_user2)
                    temp_pcc_denumerator1 = temp_pcc_denumerator1+ ((target_user[x2] - average_user1)**2)
                    temp_pcc_denumerator2 = temp_pcc_denumerator2 + ((user2_values[x2] - average_user2)**2) 
                temp_pcc_denumerator_total = (temp_pcc_denumerator1 * temp_pcc_denumerator2)**0.5
                if temp_pcc_denumerator_total != 0:
                    pcc_result = temp_pcc_numerator / temp_pcc_denumerator_total
                else:
                    pcc_result = 0
                pcc_result_list.append([user1,x1,pcc_result])
    return pcc_result_list
        

################################################################################# pearson correlation coefficient END! #########################


def fetch_selected_users_data(userIDs):
    temp_fetch = []
    for n in userIDs:
        y = "user"+str(n)
        temp_fetch.append(all_users_dict[y])
    return temp_fetch
        


def rating_prediction(selected_neighbours, target_item):
    numerator1 = []
    x2 = 0
    for x in selected_neighbours:
        y = "user"+str(x)
        x1 = all_users_dict[y][target_item]
        numerator1.append(x1)
    for y2 in numerator1:
        x2 = y2 + x2
    rating_prediction_result = x2 / len(selected_neighbours)
    return  rating_prediction_result
    
    
    
def pre_prediction(target_user, target_item, first_user_id, last_user_id):
    selected_neighbours_temp = []
    step1 = pcc(target_user,first_user_id,last_user_id)
    step2 = sorted(step1, key=lambda x: x[2])
    for x in range(0,21):    #----------------------------------------------------- SET NUMBER OF TOP 20 Neighbours
        selected_neighbours_temp.append(step2[((len(step2))-1)-x][1])
    pre_prediction_result = rating_prediction(selected_neighbours_temp,target_item)
    return pre_prediction_result
    


#please set this parameters according to your data
first_user_id = 1 
last_user_id = 69
target_user = 10  #target user
target_item = 5   #target item
print("Prediction rating from the selected user for selected the item is:", pre_prediction(target_user, target_item, first_user_id, last_user_id))






