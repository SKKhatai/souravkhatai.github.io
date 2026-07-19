package dev.souravkhatai.portfolio.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${portfolio.notification.email}")
    private String recipientEmail;

    @Value("${spring.mail.username:}")
    private String senderEmail;

    @Async
    public void sendContactAlert(String name, String email, String messageContent) {
        if (senderEmail == null || senderEmail.isBlank()) {
            log.warn("SMTP Sender Email configuration is empty. Email alert skipped.");
            return;
        }

        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setFrom(senderEmail);
            mailMessage.setTo(recipientEmail);
            mailMessage.setSubject("Portfolio Contact Form: Message from " + name);
            mailMessage.setText(String.format(
                "You have received a new message from your portfolio contact form:\n\n" +
                "Name: %s\n" +
                "Email: %s\n\n" +
                "Message:\n%s\n\n" +
                "Timestamp: %s\n",
                name, email, messageContent, java.time.LocalDateTime.now()
            ));

            mailSender.send(mailMessage);
            log.info("Contact notification email successfully sent to {}", recipientEmail);
        } catch (Exception e) {
            log.error("Failed to send contact notification email alert: {}", e.getMessage());
        }
    }
}
