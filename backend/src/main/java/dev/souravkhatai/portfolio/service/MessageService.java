package dev.souravkhatai.portfolio.service;

import dev.souravkhatai.portfolio.model.ContactMessage;
import dev.souravkhatai.portfolio.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class MessageService {

    private final ContactMessageRepository messageRepository;
    private final EmailService emailService;

    @Transactional
    public ContactMessage saveMessage(ContactMessage message) {
        log.info("Saving new contact message from: {}", message.getEmail());
        ContactMessage saved = messageRepository.save(message);
        
        // Trigger async notification email alert
        emailService.sendContactAlert(saved.getName(), saved.getEmail(), saved.getMessage());
        
        return saved;
    }
}
