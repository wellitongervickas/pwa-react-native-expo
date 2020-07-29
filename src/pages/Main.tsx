import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, StyleSheet } from 'react-native'

interface Member {
    login: string
    avatar_url: string
}

const Main: React.FC = () => {
    const [members, setMembers] = useState<Member[]>([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/members')
        .then(r => r.json())
        .then(r => {
            setMembers(r)
        })
    }, [])

    return (
        <FlatList
            contentContainerStyle={{
                padding: 24,
            }}
            data={members}
            keyExtractor={member => member.login}
            renderItem={({ item: member }) => (
                <View style={styles.member}>
                    <Image 
                        style={styles.image}
                        source={{ uri: member.avatar_url, width: 50, height: 50 }} 
                    />
                    <Text style={styles.memberLogin}>
                        {member.login}
                    </Text>
                </View>
            )}
        >

        </FlatList>
    )
}

const styles = StyleSheet.create({
    member: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    memberLogin: {
        paddingLeft: 24,
    },
    
    image: {
        width: 50,
        height: 50,
        borderRadius: 100,
    }
})

export default Main